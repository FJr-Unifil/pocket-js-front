import { Plus } from 'lucide-react'
import logo from '../assets/inorbit-frame.svg'
import letsStart from '../assets/lets-start.svg'
import { Button } from './button'
import { DialogTrigger } from './dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="inorbit logo" />
      <img src={letsStart} alt="illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
