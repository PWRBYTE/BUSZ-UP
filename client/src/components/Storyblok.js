import { useStoryblok,StoryblokComponent } from "@storyblok/react";

export default function Storyblok (){

    const story = useStoryblok('storyblok', { version: "draft" });
    // const homeStory = useStoryblok('home', { version: "draft" });
    // console.log({story,homeStory});

    if (!story?.content) {
        return <p>Loading..</p>
    }
    return <StoryblokComponent blok={story.content} 
    
    />;


}