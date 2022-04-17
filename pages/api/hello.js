import connect from "next-connect";

const handler = connect({
  onNoMatch: (req, res) => {
    res.status(503).end(`Method ${req.method} not supported`);
  },
})
.get((req, res) => {
  res.status(200).json({ name: 'John Doe' })
})
.post((req, res) => {
  res.status(201).json({ name: 'John Doe' })
});

export default handler;
