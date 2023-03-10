import { DefineCommand, Option } from '@artus-cli/artus-cli';
import { DevCommand } from './dev';

@DefineCommand({
  command: 'debug [baseDir]',
  alias: [ 'inspect' ],
  description: 'Run the development server at debug mode',
})
export class DebugCommand extends DevCommand {
  @Option({
    default: true,
    description: 'Debug with node-inspector',
  })
  inspect: boolean;

  @Option({
    alias: 'f',
    default: 0,
  })
  flags: number;

  async run() {
    console.info('port', this.port);
    console.info('inspect', this.inspect);
    console.info('flags', this.flags, typeof this.flags);
    console.info('baseDir', this.baseDir);
    return {
      command: 'debug',
    };
  }
}
