import React from 'react'

export default function Modal({toggle}) {
  return (
    <div>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">GDSC Vit Bhopal</h2>
            <p>This is Gdsc Task Round</p>
            <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={toggle}>Close Modal</button>
        </div>
        </div>

    </div>
  )
}
