// DTO: data transfer object
// This is a file that carries data between our functions. It will contain info specific to how the data should look

import { IsString } from "class-validator";

class CreatePostDto {
    @IsString()
    public author: string;

    @IsString()
    public content: string;

    @IsString()
    public title: string;
}

export default CreatePostDto;
