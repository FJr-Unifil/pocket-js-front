import { Dialog } from './components/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* {<EmptyGoals />} */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
