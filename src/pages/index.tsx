import { CommonTemplate } from '@templates/CommonTemplate'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { useGun } from 'lib/hooks/GunHook';
import { IGunChain } from 'gun';
import GUN from 'gun';
import SEA from 'gun/sea';
import { stringify } from 'querystring';
import moment from 'moment';

const Home: NextPage = () => {
  const { gun } = useGun();
  const [str, setStr] = useState("");
  const [localMsg, setLocalMsg] = useState("");
  const [gunChain, setGunChain] = useState<IGunChain<any> | null>(null);
  const [messages, setMessage] = useState<Array<{ msg: string, time: number }>>([]);
  useEffect(() => {
    if (!gun)
      return;

    gun.get("chat").map().once(async (data, id) => {
      if (data) {
        const key = "#foo";
        let message = {
          msg: data.msg,
          //@ts-ignore
          time: GUN.state.is(data, 'msg')
        }
        if (message && message.msg && message.time)
          setMessage(messages => [...messages, message].sort((a, b) => a.time - b.time));
      }
    });
    // gun.get("test").on(state => {
    //   console.debug(1);
    //   if (!!state) {
    //     console.debug(2);
    //     Object.keys(state).filter(key => key !== '_').forEach(key => {
    //       const updatedState = { [key]: state[key] }
    //       let copy = gun.get('test').get('paste');
    //       copy.on((data) => { setStr(data) });
    //       setGunChain(copy);
    //     })
    //   }
    // }, true)
  }, [gun])
  // const handleInput = (input: string) => {
  //   gunChain?.put(input);
  // }
  const handleNewMessage = async (input: string) => {
    const index = new Date().toISOString();
    gun?.get('chat').get(index).put({ msg: input });
  }
  return (
    <CommonTemplate>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <div className="flex flex-col gap-4">
        <div className='flex flex-row'>
          <input type="text" className='input input-bordered grow w-full' value={localMsg} onChange={ev => setLocalMsg(ev.target.value)} />
          <button type="button" className='btn' onClick={() => handleNewMessage(localMsg)}>Send</button>
        </div>
        <div className='flex flex-col gap-4'>
          {messages?.map((it, idx) => <div key={idx} className="rounded-md bg-base-content text-base-100 flex flex-row p-4">
            <span className="grow">{it.msg} </span><span className=''>{moment(it.time)?.format("YYYY-MM-DD HH:mm:ss")}</span>
          </div>)}
        </div>
      </div>
      {/* <input type="text" value={str} onChange={ev => handleInput(ev.target.value)} /> */}
    </CommonTemplate>
  )
}

export default Home
