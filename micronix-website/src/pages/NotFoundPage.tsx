import { usePageMeta } from '../lib/usePageMeta'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  usePageMeta('Page not found')
  return (
    <div className="container-x py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="prose-muted mx-auto mt-3 max-w-md">The page you are looking for does not exist or has moved.</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Button to="/products">Browse products</Button>
        <Button to="/" variant="secondary">
          Go to homepage
        </Button>
      </div>
    </div>
  )
}
