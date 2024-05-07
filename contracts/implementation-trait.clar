(define-trait implementation
  (
    (transfer (uint principal principal (optional (buff 34))) (response bool uint))

    (mint (uint principal) (response bool uint))
  )
)