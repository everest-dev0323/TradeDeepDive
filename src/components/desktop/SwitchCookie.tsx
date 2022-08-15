import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import SwitchComponent from '../common/Switch';

interface propTpye {
  status: boolean;
  title: string;
  content: string;
  index: number;
  cookie: Function;
}

const SwitchCookie = ({status, title, content, index, cookie}:propTpye) => {
  return (
    <div className='mt-10 cookie-item'>
      <div className='flex items-center'>
        <SwitchComponent status={status} index={index} cookie={cookie} />
        <p className='ml-2 text-[18px] text-white font-normal'>{title}</p>
      </div>
      <p className='leading-[20px] text-white'>{content}</p>
    </div>
  )
}

export default SwitchCookie
