

function ErrorMessage({message = 'Something went wrong.'}) {
  return (
    <div>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage;