import React from "react";
import MyLibrary from "./MyLibrary";

const LibraryComponent={
    title: 'Atoms/Button',
    component: MyLibrary
}

export default LibraryComponent

export const libraryButton = ()=> <MyLibrary></MyLibrary>