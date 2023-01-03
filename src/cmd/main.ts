import { DefineCommand, Command, Option } from '@artus-cli/artus-cli';

@DefineCommand({
  command: '$0 [params...]',
})
export class MainCommand extends Command {
  @Option()
  params: string[];

  async run() {
    console.info('main', this.params.join(','));
  }
}
