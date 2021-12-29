import { cwd } from "process"

export default class Generator {

  protected workspace: string = ''
  protected generatorPath: string = ''
  // protected templateDirname: string = ''
  protected templateResolvePath: string = '/templates/'

  constructor () {
    this.workspace = cwd()    
  }

}