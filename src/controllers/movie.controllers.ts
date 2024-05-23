import { Request, Response } from "express";
import prisma from "../db/prismaClient";

export const createMovie = async (req: Request, res: Response) => {
	const { name, image, genre } = req.body;
	// const userId = parseInt(req.params.userId);
	// const userId = req.params.userId;

	if (!name || !image) {
		return res
			.status(400)
			.send({ message: "The fields name and image are required" });
	}

	// if (!userId) {
	// 	return res.status(400).send({ message: "The field userId is required" });
	// }

	try {
	
		const movie = await prisma.$transaction(async (prisma) => {
			// 1. Creame la película
			const newMovie = await prisma.movies.create({
				data: {
					name: name,
					image: image,
					genre:genre
					
				},
			});

		
			// 3. Devuelveme la película creada
			return prisma.movies.findUnique({
				where: {
					id: newMovie.id,
				},
				
			});
		});

		res.status(201).send({
			msg: "Movie created successfully",
			data: movie,
			typeof: typeof movie,
		});
	} catch (error) {
		res.status(400).send(error);
	}
};

export const getAllMovies = async (req: Request, res: Response) => {
	try {
		const allMovies = await prisma.movies.findMany();
		res.status(201).send(allMovies);
	} catch (error) {
		res.status(400).send(error);
	}
};