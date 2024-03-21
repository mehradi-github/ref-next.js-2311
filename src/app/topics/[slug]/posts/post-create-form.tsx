"use client";

import FormButton from "@/components/common/form-button";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

const PostCreateForm = ({}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form>
          <div className="flex flex-col gap-4 p-4 w-80">
            <Input
              name="tilte"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Input
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
            />
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default PostCreateForm;
