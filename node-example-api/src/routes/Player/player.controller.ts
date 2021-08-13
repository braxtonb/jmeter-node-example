import express from 'express';

let playerIndexRequestCount = 0;

export const handleGetPlayerIndex = (
  req: express.Request,
  res: express.Response
) => {
  console.log(`${++playerIndexRequestCount} player index requests`);

  res.status(200).send({ message: 'Player Index' });
};

let playerByIdRequestCount = 0;

export const handleGetPlayerById = (
  req: express.Request,
  res: express.Response
) => {
  console.log(
    `${++playerByIdRequestCount} player by id requests, id=${req.params.id}`
  );

  res.status(200).send({ message: `Player by id, id=${req.params.id}` });
};
