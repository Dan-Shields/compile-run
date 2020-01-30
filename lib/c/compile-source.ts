import { writeSourceFile } from "../source-writer";
import { compileC } from "./compile-file";
import { Options, CompileCSourceResult } from "../types";

/**
 * Compiles a C source String And resolves with the path of the executable
 * @param sourceCode 
 * @param options 
 */
export async function compileCSource(sourceCode: string, options?: Options): Promise<CompileCSourceResult> {
    let filePath = await writeSourceFile('c', sourceCode);
    let executablePath = await compileC(filePath, options);
    return {filePath, executablePath};
}
