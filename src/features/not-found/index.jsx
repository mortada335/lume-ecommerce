import { Link } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center pt-20">
      <p className="font-display text-[10rem] font-bold leading-none text-surface-variant select-none">
        404
      </p>
      <h1 className="font-h1 text-h1 text-on-surface -mt-4 mb-4">
        Page not found.
      </h1>
      <p className="font-body-large text-body-large text-on-surface-variant max-w-md mb-10">
        The page you're looking for doesn't exist or has been moved. Let's get you back somewhere familiar.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-label-sm text-label-sm text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98]"
        >
          <Home size={16} /> Go Home
        </Link>
        <Link
          to="/shop"
          className="flex items-center gap-2 rounded-xl border border-outline-variant/50 px-8 py-4 font-label-sm text-label-sm text-on-surface-variant transition-all hover:border-primary hover:text-primary"
        >
          <ArrowLeft size={16} /> Browse Collection
        </Link>
      </div>
    </div>
  )
}

export default NotFound
