// @flow
import * as React from 'react';
import muiDecorator from '../../ThemeDecorator';
import paperDecorator from '../../PaperDecorator';
import { action } from '@storybook/addon-actions';
import ProjectManager from '../../../ProjectManager';
import fakeResourceExternalEditors from '../../FakeResourceExternalEditors';
import { emptyStorageProvider } from '../../../ProjectsStorage/ProjectStorageProviders';
import GDevelopJsInitializerDecorator, {
  testProject,
} from '../../GDevelopJsInitializerDecorator';
import fakeHotReloadPreviewButtonProps from '../../FakeHotReloadPreviewButtonProps';
import defaultShortcuts from '../../../KeyboardShortcuts/DefaultShortcuts';

export default {
  title: 'Project Creation/ProjectManager',
  component: ProjectManager,
  decorators: [paperDecorator, muiDecorator, GDevelopJsInitializerDecorator],
};
export const Default = () => (
  <ProjectManager
    project={testProject.project}
    shortcutMap={defaultShortcuts}
    onSaveProjectProperties={async () => true}
    onChangeProjectName={action('onChangeProjectName')}
    onOpenExternalEvents={action('onOpenExternalEvents')}
    onOpenLayout={action('onOpenLayout')}
    onOpenExternalLayout={action('onOpenExternalLayout')}
    onOpenEventsFunctionsExtension={action('onOpenEventsFunctionsExtension')}
    onInstallExtension={action('onInstallExtension')}
    onDeleteLayout={action('onDeleteLayout')}
    onDeleteExternalLayout={action('onDeleteExternalLayout')}
    onDeleteEventsFunctionsExtension={action(
      'onDeleteEventsFunctionsExtension'
    )}
    onDeleteExternalEvents={action('onDeleteExternalEvents')}
    onRenameLayout={action('onRenameLayout')}
    onRenameExternalLayout={action('onRenameExternalLayout')}
    onRenameEventsFunctionsExtension={action(
      'onRenameEventsFunctionsExtension'
    )}
    onRenameExternalEvents={action('onRenameExternalEvents')}
    onOpenResources={action('onOpenResources')}
    onOpenPlatformSpecificAssets={action('onOpenPlatformSpecificAssets')}
    eventsFunctionsExtensionsError={null}
    onReloadEventsFunctionsExtensions={action(
      'onReloadEventsFunctionsExtensions'
    )}
    freezeUpdate={false}
    hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
    resourceManagementProps={{
      getStorageProvider: () => emptyStorageProvider,
      onFetchNewlyAddedResources: async () => {},
      resourceSources: [],
      onChooseResource: () => Promise.reject('Unimplemented'),
      resourceExternalEditors: fakeResourceExternalEditors,
    }}
  />
);

export const ErrorsInFunctions = () => (
  <ProjectManager
    project={testProject.project}
    shortcutMap={defaultShortcuts}
    onSaveProjectProperties={async () => true}
    onChangeProjectName={action('onChangeProjectName')}
    onOpenExternalEvents={action('onOpenExternalEvents')}
    onOpenLayout={action('onOpenLayout')}
    onOpenExternalLayout={action('onOpenExternalLayout')}
    onOpenEventsFunctionsExtension={action('onOpenEventsFunctionsExtension')}
    onInstallExtension={action('onInstallExtension')}
    onDeleteLayout={action('onDeleteLayout')}
    onDeleteExternalLayout={action('onDeleteExternalLayout')}
    onDeleteEventsFunctionsExtension={action(
      'onDeleteEventsFunctionsExtension'
    )}
    onDeleteExternalEvents={action('onDeleteExternalEvents')}
    onRenameLayout={action('onRenameLayout')}
    onRenameExternalLayout={action('onRenameExternalLayout')}
    onRenameEventsFunctionsExtension={action(
      'onRenameEventsFunctionsExtension'
    )}
    onRenameExternalEvents={action('onRenameExternalEvents')}
    onOpenResources={action('onOpenResources')}
    onOpenPlatformSpecificAssets={action('onOpenPlatformSpecificAssets')}
    eventsFunctionsExtensionsError={
      new Error('Fake error during code generation')
    }
    onReloadEventsFunctionsExtensions={action(
      'onReloadEventsFunctionsExtensions'
    )}
    freezeUpdate={false}
    hotReloadPreviewButtonProps={fakeHotReloadPreviewButtonProps}
    resourceManagementProps={{
      getStorageProvider: () => emptyStorageProvider,
      onFetchNewlyAddedResources: async () => {},
      resourceSources: [],
      onChooseResource: () => Promise.reject('Unimplemented'),
      resourceExternalEditors: fakeResourceExternalEditors,
    }}
  />
);
