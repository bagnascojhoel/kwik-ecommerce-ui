import { Link } from 'react-router-dom'
import { Icon } from '@app/content'

export function ErrorScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <div className="flex flex-row justify-center text-center">
          <div className="text-4xl mr-3">
            <Icon icon="ri-error-warning-line" className="my-0 mx-auto" />
          </div>
          <h1 className="text-2xl mb-4">Oops! Something went wrong</h1>
        </div>
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
