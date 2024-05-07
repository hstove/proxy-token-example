(use-trait ft .implementation-trait.implementation)
(impl-trait .proxy-token-trait.proxy-token-trait)

(define-fungible-token mytoken)
(define-constant contract-owner tx-sender)

(define-data-var token-uri (optional (string-utf8 256)) none)

(define-data-var current-implementation principal .implementation)

(define-constant ERR_UNAUTHORIZED (err u100))
(define-constant ERR_INVALID_IMPLEMENTATION (err u101))

;; User-exposed transfer function
;; 
;; Must provide an `implementation` argument, which is called into for
;; all validation
(define-public (transfer
    (amount uint)
    (sender principal)
    (recipient principal)
    (memo (optional (buff 34)))
    (implementation <ft>)
  )
  (begin
    ;; #[allow(unchecked_data)]
    ;; (try! (validate-implementation implementation))
    ;; #[allow(unchecked_data)]
    (try! (contract-call? implementation transfer amount sender recipient memo))
    ;; #[allow(unchecked_data)]
    (try! (ft-transfer? mytoken amount sender recipient))
    (ok true)
  )
)

(define-read-only (validate-implementation (implementation <ft>))
  (ok (asserts! (is-eq (var-get current-implementation) (contract-of implementation))
    ERR_INVALID_IMPLEMENTATION
  ))
)

(define-read-only (get-balance (owner principal))
  (ok (ft-get-balance mytoken owner))
)

(define-read-only (get-name)
  (ok "MyToken")
)

(define-read-only (get-symbol)
  (ok "MYTKN")
)

(define-read-only (get-decimals)
  (ok u6)
)

(define-read-only (get-total-supply)
  (ok (ft-get-supply mytoken))
)

(define-read-only (get-token-uri)
    (ok (var-get token-uri)
    )
)

(define-public (set-token-uri (value (string-utf8 256)))
  ;; #[filter(value)]
  (if (is-eq tx-sender contract-owner)
    (ok (var-set token-uri (some value)))
    (err ERR_UNAUTHORIZED)
  )
)

(define-read-only (get-implementation)
  (var-get current-implementation)
)

(define-public (mint (amount uint) (recipient principal) (implementation <ft>))
  (begin
    ;; #[allow(unchecked_data)]
    (try! (validate-implementation implementation))
    ;; #[allow(unchecked_data)]
    (unwrap-panic (ft-mint? mytoken amount recipient))
    (ok true)
  )
)