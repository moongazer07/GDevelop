// @flow
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import SubscriptionChecker, {
  type SubscriptionCheckerInterface,
} from '../Profile/Subscription/SubscriptionChecker';
import Checkbox from '../UI/Checkbox';
import ColorField from '../UI/ColorField';
import { I18n } from '@lingui/react';
import { Line, Column } from '../UI/Grid';
import SemiControlledTextField from '../UI/SemiControlledTextField';
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
import {
  hexNumberToRGBString,
  rgbStringToHexNumber,
} from '../Utils/ColorTransformer';
import useForceUpdate from '../Utils/UseForceUpdate';
import ResourceSelectorWithThumbnail from '../ResourcesList/ResourceSelectorWithThumbnail';
import { type ResourceManagementProps } from '../ResourcesList/ResourceSource';
import SelectField from '../UI/SelectField';
import SelectOption from '../UI/SelectOption';
import Text from '../UI/Text';
import AlertMessage from '../UI/AlertMessage';
import GetSubscriptionCard from '../Profile/Subscription/GetSubscriptionCard';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { hasValidSubscriptionPlan } from '../Utils/GDevelopServices/Usage';

type Props = {|
  loadingScreen: gdLoadingScreen,
  watermark: gdWatermark,
  onLoadingScreenUpdated: () => void,
  onChangeSubscription: () => Promise<void> | void,

  // For resources:
  project: gdProject,
  resourceManagementProps: ResourceManagementProps,
|};

const watermarkPlacementOptions = [
  { value: 'top', primaryText: t`Top` },
  { value: 'top-left', primaryText: t`Top left corner` },
  { value: 'top-right', primaryText: t`Top right corner` },
  { value: 'bottom', primaryText: t`Bottom` },
  { value: 'bottom-left', primaryText: t`Bottom left corner` },
  { value: 'bottom-right', primaryText: t`Bottom right corner` },
];

export const LoadingScreenEditor = ({
  loadingScreen,
  watermark,
  onLoadingScreenUpdated,
  onChangeSubscription,
  project,
  resourceManagementProps,
}: Props) => {
  const subscriptionChecker = React.useRef<?SubscriptionCheckerInterface>(null);
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const forceUpdate = useForceUpdate();
  const shouldDisplayGetSubscriptionCard = !hasValidSubscriptionPlan(
    authenticatedUser.subscription
  );

  const onUpdate = () => {
    forceUpdate();
    onLoadingScreenUpdated();
  };

  return (
    <I18n>
      {({ i18n }) => (
        <ColumnStackLayout expand noMargin>
          <Text size="section-title">
            <Trans>Branding</Trans>
          </Text>
          <ColumnStackLayout noMargin>
            <ResponsiveLineStackLayout noMargin>
              <Column expand noMargin justifyContent="center">
                <Checkbox
                  label={
                    <Trans>
                      Display GDevelop logo at startup (in exported game)
                    </Trans>
                  }
                  checked={loadingScreen.isGDevelopLogoShownDuringLoadingScreen()}
                  onCheck={(e, checked) => {
                    if (
                      !checked &&
                      !watermark.isGDevelopWatermarkShown() &&
                      subscriptionChecker.current &&
                      !subscriptionChecker.current.checkUserHasSubscription()
                    ) {
                      // If user wants to deactivate GDevelop splash screen although
                      // watermark is hidden, we don't allow it if they have no subscription.
                      return;
                    }
                    loadingScreen.showGDevelopLogoDuringLoadingScreen(checked);
                    onUpdate();
                  }}
                />
              </Column>
              <Column expand noMargin justifyContent="center">
                <SelectField
                  fullWidth
                  floatingLabelText={<Trans>GDevelop logo style</Trans>}
                  value={loadingScreen.getGDevelopLogoStyle()}
                  onChange={(e, i, newGdevelopLogoStyle: string) => {
                    const currentGDevelopLogoStyle = loadingScreen.getGDevelopLogoStyle();
                    if (currentGDevelopLogoStyle === newGdevelopLogoStyle)
                      return;
                    loadingScreen.setGDevelopLogoStyle(newGdevelopLogoStyle);
                    onUpdate();
                  }}
                  disabled={
                    !loadingScreen.isGDevelopLogoShownDuringLoadingScreen()
                  }
                >
                  <SelectOption value="light" primaryText={t`Light (plain)`} />
                  <SelectOption
                    value="light-colored"
                    primaryText={t`Light (colored)`}
                  />
                  <SelectOption value="dark" primaryText={t`Dark (plain)`} />
                  <SelectOption
                    value="dark-colored"
                    primaryText={t`Dark (colored)`}
                  />
                </SelectField>
              </Column>
            </ResponsiveLineStackLayout>

            <ResponsiveLineStackLayout noMargin>
              <Column expand noMargin justifyContent="center">
                <Checkbox
                  label={
                    <Trans>
                      Display GDevelop watermark after the game is loaded (in
                      exported game)
                    </Trans>
                  }
                  checked={watermark.isGDevelopWatermarkShown()}
                  onCheck={(e, checked) => {
                    if (
                      !checked &&
                      !loadingScreen.isGDevelopLogoShownDuringLoadingScreen() &&
                      subscriptionChecker.current &&
                      !subscriptionChecker.current.checkUserHasSubscription()
                    ) {
                      // If user wants to deactivate watermark although GDevelop splash
                      // screen is hidden, we don't allow it if they have no subscription.
                      return;
                    }
                    watermark.showGDevelopWatermark(checked);
                    onUpdate();
                  }}
                />
              </Column>
              <Column expand noMargin justifyContent="center">
                <SelectField
                  fullWidth
                  floatingLabelText={
                    <Trans>GDevelop watermark placement</Trans>
                  }
                  value={watermark.getPlacement()}
                  onChange={(e, i, newPlacement: string) => {
                    const currentGDevelopLogoStyle = loadingScreen.getGDevelopLogoStyle();
                    if (currentGDevelopLogoStyle === newPlacement) return;
                    watermark.setPlacement(newPlacement);
                    onUpdate();
                  }}
                  disabled={!watermark.isGDevelopWatermarkShown()}
                >
                  {watermarkPlacementOptions.map(option => (
                    <SelectOption
                      key={option.value}
                      value={option.value}
                      primaryText={option.primaryText}
                    />
                  ))}
                </SelectField>
              </Column>
            </ResponsiveLineStackLayout>
            {shouldDisplayGetSubscriptionCard && (
              <GetSubscriptionCard subscriptionDialogOpeningReason="Disable GDevelop splash at startup">
                <Text>
                  <Trans>
                    Get a silver or gold subscription to disable GDevelop
                    branding.
                  </Trans>
                </Text>
              </GetSubscriptionCard>
            )}
          </ColumnStackLayout>
          <Text size="section-title">
            <Trans>Loading screen</Trans>
          </Text>
          <Text size="block-title">
            <Trans>Background</Trans>
          </Text>
          <Line noMargin>
            <ResourceSelectorWithThumbnail
              floatingLabelText={<Trans>Background image</Trans>}
              project={project}
              resourceManagementProps={resourceManagementProps}
              resourceKind="image"
              resourceName={loadingScreen.getBackgroundImageResourceName()}
              onChange={newResourceName => {
                const currentResourceName = loadingScreen.getBackgroundImageResourceName();
                if (currentResourceName === newResourceName) return;
                loadingScreen.setBackgroundImageResourceName(newResourceName);
                onUpdate();
              }}
            />
          </Line>
          <ResponsiveLineStackLayout noMargin>
            <ColorField
              fullWidth
              floatingLabelText={<Trans>Background color</Trans>}
              disableAlpha
              color={hexNumberToRGBString(loadingScreen.getBackgroundColor())}
              onChange={newColor => {
                const currentBackgroundColor = loadingScreen.getBackgroundColor();
                const newBackgroundColor = rgbStringToHexNumber(newColor);
                if (currentBackgroundColor === newBackgroundColor) return;
                loadingScreen.setBackgroundColor(newBackgroundColor);
                onUpdate();
              }}
            />
            <SemiControlledTextField
              floatingLabelText={
                <Trans>Background fade in duration (in seconds)</Trans>
              }
              step={0.1}
              fullWidth
              type="number"
              value={'' + loadingScreen.getBackgroundFadeInDuration()}
              onChange={newValue => {
                const currentBackgroundFadeInDuration = loadingScreen.getBackgroundFadeInDuration();
                const newBackgroundFadeInDuration = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (
                  currentBackgroundFadeInDuration ===
                  newBackgroundFadeInDuration
                )
                  return;
                loadingScreen.setBackgroundFadeInDuration(
                  newBackgroundFadeInDuration
                );
                onUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
          <Text size="block-title">
            <Trans>Progress bar</Trans>
          </Text>
          <Checkbox
            label={<Trans>Show progress bar</Trans>}
            checked={loadingScreen.getShowProgressBar()}
            onCheck={(e, checked) => {
              loadingScreen.setShowProgressBar(checked);
              onUpdate();
            }}
          />
          <ResponsiveLineStackLayout noMargin>
            <SemiControlledTextField
              floatingLabelText={<Trans>Progress bar minimum width</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarMinWidth()}
              onChange={newValue => {
                const currentProgressBarMinWidth = loadingScreen.getProgressBarMinWidth();
                const newProgressBarMinWidth = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (currentProgressBarMinWidth === newProgressBarMinWidth) {
                  return;
                }
                loadingScreen.setProgressBarMinWidth(newProgressBarMinWidth);
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`In pixels. 0 to ignore.`)}
            />
            <SemiControlledTextField
              floatingLabelText={<Trans>Progress bar width</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarWidthPercent()}
              onChange={newValue => {
                const currentProgressBarWidthPercent = loadingScreen.getProgressBarWidthPercent();
                const newProgressBarWidthPercent = Math.min(
                  100,
                  Math.max(1, parseFloat(newValue))
                );
                if (
                  currentProgressBarWidthPercent === newProgressBarWidthPercent
                ) {
                  return;
                }

                loadingScreen.setProgressBarWidthPercent(
                  newProgressBarWidthPercent
                );
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`As a percent of the game width.`)}
            />
            <SemiControlledTextField
              floatingLabelText={<Trans>Progress bar maximum width</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarMaxWidth()}
              onChange={newValue => {
                const currentProgressBarMaxWidth = loadingScreen.getProgressBarMaxWidth();
                const newProgressBarMaxWidth = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (currentProgressBarMaxWidth === newProgressBarMaxWidth) {
                  return;
                }
                loadingScreen.setProgressBarMaxWidth(newProgressBarMaxWidth);
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`In pixels. 0 to ignore.`)}
            />
          </ResponsiveLineStackLayout>
          <ResponsiveLineStackLayout noMargin>
            <SemiControlledTextField
              floatingLabelText={<Trans>Progress bar height</Trans>}
              fullWidth
              type="number"
              value={'' + loadingScreen.getProgressBarHeight()}
              onChange={newValue => {
                const currentProgressBarHeight = loadingScreen.getProgressBarHeight();
                const newProgressBarHeight = Math.max(1, parseFloat(newValue));
                if (currentProgressBarHeight === newProgressBarHeight) {
                  return;
                }
                loadingScreen.setProgressBarHeight(newProgressBarHeight);
                onUpdate();
              }}
              helperMarkdownText={i18n._(t`In pixels.`)}
            />
            <ColorField
              fullWidth
              floatingLabelText={<Trans>Progress bar color</Trans>}
              disableAlpha
              color={hexNumberToRGBString(loadingScreen.getProgressBarColor())}
              onChange={newColor => {
                const currentProgressBarColor = loadingScreen.getProgressBarColor();
                const newProgressBarColor = rgbStringToHexNumber(newColor);
                if (currentProgressBarColor === newProgressBarColor) {
                  return;
                }
                loadingScreen.setProgressBarColor(newProgressBarColor);
                onUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
          <ResponsiveLineStackLayout noMargin>
            <SemiControlledTextField
              floatingLabelText={
                loadingScreen.isGDevelopLogoShownDuringLoadingScreen() ? (
                  <Trans>Logo and progress fade in delay (in seconds)</Trans>
                ) : (
                  <Trans>Progress fade in delay (in seconds)</Trans>
                )
              }
              step={0.1}
              fullWidth
              type="number"
              value={'' + loadingScreen.getLogoAndProgressLogoFadeInDelay()}
              onChange={newValue => {
                const currentLogoAndProgressLogoFadeInDelay = loadingScreen.getLogoAndProgressLogoFadeInDelay();
                const newLogoAndProgressLogoFadeInDelay = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (
                  currentLogoAndProgressLogoFadeInDelay ===
                  newLogoAndProgressLogoFadeInDelay
                )
                  return;
                loadingScreen.setLogoAndProgressLogoFadeInDelay(
                  newLogoAndProgressLogoFadeInDelay
                );
                onUpdate();
              }}
            />
            <SemiControlledTextField
              floatingLabelText={
                loadingScreen.isGDevelopLogoShownDuringLoadingScreen() ? (
                  <Trans>Logo and progress fade in duration (in seconds)</Trans>
                ) : (
                  <Trans>Progress fade in duration (in seconds)</Trans>
                )
              }
              step={0.1}
              fullWidth
              type="number"
              value={'' + loadingScreen.getLogoAndProgressFadeInDuration()}
              onChange={newValue => {
                const currentLogoAndProgressFadeInDuration = loadingScreen.getLogoAndProgressFadeInDuration();
                const newLogoAndProgressFadeInDuration = Math.max(
                  0,
                  parseFloat(newValue)
                );
                if (
                  currentLogoAndProgressFadeInDuration ===
                  newLogoAndProgressFadeInDuration
                )
                  return;
                loadingScreen.setLogoAndProgressFadeInDuration(
                  newLogoAndProgressFadeInDuration
                );
                onUpdate();
              }}
            />
          </ResponsiveLineStackLayout>
          {loadingScreen.isGDevelopLogoShownDuringLoadingScreen() ? (
            <AlertMessage kind="info">
              <Trans>
                Progress bar fade in delay and duration will be applied to
                GDevelop logo.
              </Trans>
            </AlertMessage>
          ) : null}
          <Text size="block-title">
            <Trans>Duration</Trans>
          </Text>
          <SemiControlledTextField
            floatingLabelText={
              <Trans>Minimum duration of the screen (in seconds)</Trans>
            }
            step={0.1}
            fullWidth
            type="number"
            value={'' + loadingScreen.getMinDuration()}
            onChange={newValue => {
              const currentMinDuration = loadingScreen.getMinDuration();
              const newMinDuration = Math.max(0, parseFloat(newValue));
              if (currentMinDuration === newMinDuration) {
                return;
              }
              loadingScreen.setMinDuration(newMinDuration);
              onUpdate();
            }}
            helperMarkdownText={i18n._(
              t`When previewing the game in the editor, this duration is ignored (the game preview starts as soon as possible).`
            )}
          />

          <SubscriptionChecker
            ref={subscriptionChecker}
            onChangeSubscription={onChangeSubscription}
            mode="mandatory"
            id="Disable GDevelop splash at startup"
            title={<Trans>Disable GDevelop splash at startup</Trans>}
          />
        </ColumnStackLayout>
      )}
    </I18n>
  );
};
