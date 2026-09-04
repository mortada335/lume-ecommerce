import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

/**
 * Standard fixed-height sub-header bar containing breadcrumb navigation
 * and page-specific filter/action controls.
 * Fixed height: h-14 (56px) across all pages.
 */
const SubHeader = ({ breadcrumbs = [], children }) => {
  return (
    <div className="sticky top-20 z-30 h-14 border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-caption text-on-surface-variant shrink-0">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1
            return (
              <span key={crumb.label || idx} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight size={13} className="text-on-surface-variant/50 shrink-0" />}
                {crumb.to && !isLast ? (
                  <Link to={crumb.to} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-on-surface truncate max-w-[140px] sm:max-w-xs">
                    {crumb.label}
                  </span>
                )}
              </span>
            )
          })}
        </nav>

        {/* Filter / Actions Section */}
        {children && (
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar shrink-0 ml-4">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default SubHeader
