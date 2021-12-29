import { resolve } from "path/posix"
import { cwd } from "process"

export default class Generator {

  protected workspace: string = ''
  protected generatorPath: string = ''
  // protected templateDirname: string = ''
  protected templateResolvePath: string = '/templates/'

  constructor () {
    // 当前脚手架路径分隔符
    const GeneratorPathSeparator = 'dist'

    this.workspace = cwd()
    this.generatorPath = resolve(__dirname).substring(0, resolve(__dirname).indexOf(GeneratorPathSeparator) )
  }

}