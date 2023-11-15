import React from "react";
import { PageHeader } from "./layout/PagerHeader";


export default function App(){
  return <div className="max-h-screen flex flex-col">
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1>
      Hello world!
    </h1>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="flex-shrink-0">
    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-gray-500">You have a new message!</p>
  </div>
</div>
    <PageHeader/>
  </div>
}
