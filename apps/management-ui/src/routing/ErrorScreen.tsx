import { Link } from 'react-router-dom'
import { Icon } from '@app/content'

export function ErrorScreen() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-4xl mb-8">
          <Icon icon="ri-error-warning-line" />
        </div>
        <h1 className="text-2xl mb-4">Oops! Something went wrong</h1>
        <p className="text-base mb-4">
          We're sorry, but it seems like there was an error processing your
          request.
        </p>
        <p className="text-base mb-4">
          Please go back to the{' '}
          <Link to="/" className="text-blue-500 underline">
            homepage
          </Link>{' '}
          or try again later.
        </p>
      </div>
    </div>
  )
}
