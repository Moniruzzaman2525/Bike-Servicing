import app from './app';
import config from './app/config';


async function main() {
    app.listen(config.port || 5000, () => {
        console.log(`Server is listening on port ${config.port || 5000}`);
    });
}

main();


