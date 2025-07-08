import loadComponents from './components';
import loadBlocks from './blocks';
import loadTraits from'./traits';

// import loadCommand from "./commands";
import en from './locale/en';

export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
    }, ...opts
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
  loadTraits(editor,options);
  // loadCommand(editor, options);
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n,
  });
};