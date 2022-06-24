#!/usr/bin/env python

# WS server that sends camera streams to a web server using opencv


import asyncio
import websockets
    
async def time(websocket, path):

    while True:
        try:
            data = await websocket.recv()
            print("receiving data...."+data)
        except :
            
            pass
                
start_server = websockets.serve(time, "127.0.0.1", 9997)    
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
