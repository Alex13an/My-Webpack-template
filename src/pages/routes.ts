import React from "react";
import Blog from "./blog/Blog";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Services from "./services/Services";

export interface IRoute {
	path: string;
	element: React.ComponentType;
}

export enum RouteNames {
	HOME = '/',
	BLOG = '/blog',
	PROJECTS = '/projects',
	SERVICES = '/services',
}

export const publicRoutes: IRoute[] = [
	{
		path: RouteNames.HOME,
		element: Home,
	},
	{
		path: RouteNames.BLOG,
		element: Blog,
	},
	{
		path: RouteNames.PROJECTS,
		element: Projects,
	},
	{
		path: RouteNames.SERVICES,
		element: Services,
	},
]