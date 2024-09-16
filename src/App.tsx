import { Plus, X } from 'lucide-react'

import logo from './assets/inorbit-frame.svg'
import letsStart from './assets/lets-start.svg'
import { Button } from './components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/dialog'
import { Label } from './components/label'
import { Input } from './components/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './components/radio-group'

export function App() {
  return (
    <Dialog>
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

      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar Meta</DialogTitle>
              <DialogClose>
                <X className="size-5 text-zinc-600" />
              </DialogClose>
            </div>
            <DialogDescription>
              Adicione atividades que te fazem bem e que você quer continuar
              praticando toda semana.
            </DialogDescription>
          </div>

          <form action="" className="flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  placeholder="Praticar exercícios, meditar, etc..."
                  autoFocus
                  id="title"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Quantas vezes na semana?</Label>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      1x na semana
                    </span>
                    <span className="text-lg leading-none">🥱</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="2">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      2x na semana
                    </span>
                    <span className="text-lg leading-none">🙂</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="3">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      3x na semana
                    </span>
                    <span className="text-lg leading-none">😎</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="4">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      4x na semana
                    </span>
                    <span className="text-lg leading-none">😜</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="5">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      5x na semana
                    </span>
                    <span className="text-lg leading-none">🤯</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="6">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      6x na semana
                    </span>
                    <span className="text-lg leading-none">🚀</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="7">
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      Todos os dias da semana
                    </span>
                    <span className="text-lg leading-none">🔥</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button className="flex-1">Salvar</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
