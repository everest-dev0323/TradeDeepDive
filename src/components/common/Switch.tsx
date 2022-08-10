import { useState } from 'react'
import { Switch } from '@headlessui/react'

interface propTpye{
  status: boolean;
}

export default function SwitchComponent({status}: propTpye) {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="py-2">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#026c8e] border-[#000]' : 'bg-none border-[#026c8e]'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-[38px] bg-[#02344a]' : 'translate-x-[2px] bg-[#026c8e]'}
            pointer-events-none inline-block h-[30px] w-[30px] translate-y-[2px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
