(impl-trait .implementation-trait.implementation)

(define-map blocklist principal bool)

(define-constant owner tx-sender)

(define-constant ERR_UNAUTHORIZED (err u400))
(define-constant ERR_BLOCKED (err u401))
(define-constant ERR_INVALID_CALLER (err u402))

;; Transfer tokens from one account to another.
;; Sender must not be blocked.
(define-public (transfer
  (amount uint)
  (sender principal)
  (recipient principal)
  (memo (optional (buff 34)))
)
  (begin
    (asserts! (is-eq contract-caller .proxy) ERR_INVALID_CALLER)
    ;; #[filter(amount, recipient)]
    (asserts! (is-eq tx-sender sender) ERR_UNAUTHORIZED)
    (asserts! (not (is-blocked sender)) ERR_BLOCKED)
    (match memo to-print (print to-print) 0x)
    (try! (contract-call? .token transfer amount sender recipient memo))
    (ok true)
  )
)

(define-public (update-blocklist (account principal) (blocked bool))
  (if (is-eq tx-sender owner)
    (ok (map-set blocklist account blocked))
    ERR_UNAUTHORIZED
  )
)

(define-read-only (is-blocked (account principal))
  (default-to false (map-get? blocklist account))
)

(define-public (mint (amount uint) (recipient principal))
  (if (is-eq tx-sender owner)
    (ok true)
    ERR_UNAUTHORIZED
  )
)