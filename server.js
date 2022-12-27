const express = require('express');
const cors = require('cors');
const app = express();
const memberRoutes = require('./src/member/routes')
const assetRoutes = require('./src/asset/routes')
const memberAssetRoutes = require('./src/member-asset/routes')

const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/v1/member', memberRoutes);
app.use('/api/v1/asset', assetRoutes);
app.use('/api/v1/member-asset', memberAssetRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
