import { LanguageExtMap } from './interfaces/Language-ext';
import { Result } from './interfaces/result';
import { Options } from './interfaces/options';
export type LanguageNames = 'c';
export { LanguageExtMap, Result, Options };
/**
 * Optional callback for the run APIs
 * @param err Error if any
 * @param res The result object containing stderr and stdout
 */
export type errorResultCallback = (err: Error | undefined, res?: Result) => void;

export type CompileCSourceResult = {filePath: string, executablePath: string};