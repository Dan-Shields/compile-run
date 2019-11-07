import { runCFile } from './run-file';
import { runCSource } from './run-source';
import { compileC } from './compile-file';
import { compileCSource } from './compile-source';

const c = {
    runFile: runCFile,
    runSource: runCSource,
    compileFile: compileC,
    compileSource: compileCSource
};

export default c;
