// Home feature public API
// export * from './components'

import { Button } from "@base-ui/react";
import { Camera } from "lucide-react";

// export { default as HomePage } from './pages/HomePage'
const Home = () => {
  return (
    <header>
      <p>lorem</p>
      sdivhospdjvkmr

        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <Camera />
      </div>
    </header>
  )
}

export default Home;