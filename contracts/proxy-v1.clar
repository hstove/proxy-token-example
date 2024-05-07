;; This is the proxy contract, which calls into the
;; low-level token contract.
;; 
;; You could implement custom logic here. For example,
;; this contract impliments a blocklist.

(define-map blocklist principal bool)

(define-constant owner tx-sender)

(define-constant ERR_UNAUTHORIZED (err u404))
(define-constant ERR_BLOCKED (err u409))

;; Transfer tokens from one account to another.
;; Sender must not be blocked.
(define-public (transfer
  (amount uint)
  (sender principal)
  (recipient principal)
  (memo (optional (buff 34)))
)
  (begin
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