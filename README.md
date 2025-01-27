##### workshop-task-9

# Workshop 9 : Live Video

[Website Link] 

## Task
[] Make an experimental 'smart mirror' using live video capture.<br>
[] Include manipulations at the level of the pixel.<br>

## Notes from the workshop video

createCapture() : allows us to take video from a webcam or any attached video device. -> we can pulish our sketches online, the sketch would incorporate video from the user's webcam.


## Progress (Experimentation and problem solving)

<img width="868" alt="image" src="https://github.com/user-attachments/assets/367d91b8-5ec8-4e91-90d8-a55c696fc1f7" />
<br>
<br>
<img width="536" alt="image" src="https://github.com/user-attachments/assets/df1e1eb4-5703-4e37-bb68-aaf137fe0c0c" />
<br>
<br>
I had three error signs in my sketches. I needed to figure out what mistake I have been made but it was not easy to find it out. Finally, I have found that I have made some mistakes with the brackets. I needed to remove the curly bracket in line 36 and add a closing curly bracket to line 60.
<br>
<br>
<img width="854" alt="image" src="https://github.com/user-attachments/assets/ccf7458e-13a1-42ea-ace2-431ce6b7d060" />
<br>
<br>

-----------------------------
<img width="327" alt="image" src="https://github.com/user-attachments/assets/083b2646-3e70-47ca-bc4a-bb6700c6a000" />

<img width="853" alt="image" src="https://github.com/user-attachments/assets/8da0cf5e-370f-449c-9670-c2d88c5e4d42" />
<br>
<br>
By changing some codes, Just some balls created according to the camera based colours. 


-----------------------------

<img width="841" alt="image" src="https://github.com/user-attachments/assets/037e1a01-20db-40a6-8932-71d4ed0e7030" />
<br>
<br>
The final workshop was about creating a sketch using video (createCapture function), which was an exciting experience. It was fascinating to learn how to control video elements through coding. I experimented with various effects while turning on the camera and applying different visual filters.
While considering what to create, I came across the ‘invert’ filter function, and I thought it would be interesting to create a slightly eerie effect. To achieve this, I made a box system that generates mosaic-like shapes across the screen.
I wanted to ensure that the shapes were not just confined to the centre but rather filled the entire screen. To accomplish this, I set the number of boxes to 100 in the move() function of the class Box(). This adjustment allowed the elements to spread across the canvas, creating a more dynamic and immersive visual effect.
Furthermore, I experimented by modifying the values in the checkEdges() function to see how the boxes interact with the screen boundaries. Observing how changes in values resulted in different visual patterns was intriguing, helping me realize how small tweaks in the code can significantly impact the overall visual output.



## codes

<img width="281" alt="image" src="https://github.com/user-attachments/assets/27e6d830-f715-43c0-93d1-177b65390a04" />
<img width="266" alt="image" src="https://github.com/user-attachments/assets/d2a0958d-6fc7-43bc-bb7f-a5c426cc7071" />
<img width="312" alt="image" src="https://github.com/user-attachments/assets/5ed34410-92a5-4ce0-8bf9-e68284294851" />

<img width="397" alt="image" src="https://github.com/user-attachments/assets/376bc54d-a5d2-4682-ba49-9935a8a9007b" />
<img width="281" alt="image" src="https://github.com/user-attachments/assets/1c3ca146-1ab3-46dc-8417-ca50a3400e69" />



## Future Development

If I further develop this workshop, I believe there are endless possibilities. I feel that I can incorporate many of the skills I learned from previous workshops to enhance the project significantly.
For example, I could add a button to generate new shapes on the screen, implement a feature that allows users to draw on the screen, create falling emojis, or enable users to type text onto the screen. These additions could make the experience more interactive and engaging for users.
In this workshop, I used only a single filter. Still, next time, I think it would be great to use a dropdown menu to allow users to select from multiple filters, providing them with various visual experiences.
Additionally, integrating different themes with relevant quotes or captions could enhance the project's emotional connection, making it visually appealing and meaningful to users. This could transform the project from a simple visual experiment into a personalized interactive art experience.

## Reference / other sources that helped me

https://www.youtube.com/watch?v=hHZcIMppkFc

- drawing with webcam (createCapture function) tutorial
<Br>
<Br>
https://www.youtube.com/watch?v=QlP4PoABkww&t=62s

- understanding video (fun effects on webcam)
<Br>
<Br>
https://editor.p5js.org/jeffThompson/sketches/ael8Y4YMB

- webam input example (p5.js)
<Br>
<Br>
https://p5js.org/reference/p5/class/

- class (p5.js documentation)
