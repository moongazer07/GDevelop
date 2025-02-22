// @flow
import * as React from 'react';
import { I18n } from '@lingui/react';
import { t, Trans } from '@lingui/macro';
import TranslateIcon from '@material-ui/icons/Translate';
import FlatButton from '../../../UI/FlatButton';
import { Column, Line } from '../../../UI/Grid';
import { LineStackLayout } from '../../../UI/Layout';
import UserChip from '../../../UI/User/UserChip';
import ProjectManager from '../../../UI/CustomSvgIcons/ProjectManager';
import FloppyIcon from '../../../UI/CustomSvgIcons/Floppy';
import Window from '../../../Utils/Window';
import optionalRequire from '../../../Utils/OptionalRequire';
import { useResponsiveWindowWidth } from '../../../UI/Reponsive/ResponsiveWindowMeasurer';
import TextButton from '../../../UI/TextButton';
import IconButton from '../../../UI/IconButton';
const electron = optionalRequire('electron');

type Props = {|
  hasProject: boolean,
  onOpenProjectManager: () => void,
  onOpenProfile: () => void,
  onOpenLanguageDialog: () => void,
  onSave: () => Promise<void>,
  canSave: boolean,
|};

export const HomePageHeader = ({
  hasProject,
  onOpenProjectManager,
  onOpenProfile,
  onOpenLanguageDialog,
  onSave,
  canSave,
}: Props) => {
  const windowWidth = useResponsiveWindowWidth();

  return (
    <I18n>
      {({ i18n }) => (
        <LineStackLayout
          justifyContent="space-between"
          alignItems="center"
          noMargin
          expand
        >
          <Column noMargin>
            <Line noMargin>
              <IconButton
                size="small"
                id="main-toolbar-project-manager-button"
                onClick={onOpenProjectManager}
                tooltip={t`Project Manager`}
                color="default"
                disabled={!hasProject}
              >
                <ProjectManager />
              </IconButton>
              {!!hasProject && (
                <IconButton
                  size="small"
                  id="main-toolbar-save-button"
                  onClick={onSave}
                  tooltip={t`Save project`}
                  color="default"
                  disabled={!canSave}
                >
                  <FloppyIcon />
                </IconButton>
              )}
            </Line>
          </Column>
          <Column>
            <LineStackLayout noMargin alignItems="center">
              {!electron && windowWidth !== 'small' && (
                <FlatButton
                  label={<Trans>Download desktop app</Trans>}
                  onClick={() =>
                    Window.openExternalURL('https://gdevelop.io/download')
                  }
                />
              )}
              <UserChip onOpenProfile={onOpenProfile} />
              <TextButton
                label={i18n.language.toUpperCase()}
                onClick={onOpenLanguageDialog}
                icon={<TranslateIcon fontSize="small" />}
              />
            </LineStackLayout>
          </Column>
        </LineStackLayout>
      )}
    </I18n>
  );
};
