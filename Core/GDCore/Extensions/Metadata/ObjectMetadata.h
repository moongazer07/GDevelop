/*
 * GDevelop Core
 * Copyright 2008-2016 Florian Rival (Florian.Rival@gmail.com). All rights
 * reserved. This project is released under the MIT License.
 */
#ifndef OBJECTMETADATA_H
#define OBJECTMETADATA_H
#include <functional>
#include <map>
#include <set>
#include <memory>

#include "GDCore/Extensions/Metadata/ExpressionMetadata.h"
#include "GDCore/Extensions/Metadata/InstructionMetadata.h"
#include "GDCore/Project/Object.h"
#include "GDCore/Project/ObjectConfiguration.h"
#include "GDCore/String.h"
namespace gd {
class InstructionMetadata;
class MultipleInstructionMetadata;
class ExpressionMetadata;
}  // namespace gd

typedef std::function<std::unique_ptr<gd::ObjectConfiguration>()>
    CreateFunPtr;

namespace gd {

/**
 * \brief Contains user-friendly information about an object type, and a
 * function to create a new gd::Object of this type.
 *
 * \ingroup Events
 */
class GD_CORE_API ObjectMetadata {
 public:
  /**
   * \brief Construct an object metadata, using a "blueprint" object that will
   * be copied when a new object is requested.
   */
  ObjectMetadata(const gd::String& extensionNamespace_,
                 const gd::String& name_,
                 const gd::String& fullname_,
                 const gd::String& description_,
                 const gd::String& icon24x24_,
                 std::shared_ptr<gd::ObjectConfiguration> blueprintObject_);
  /**
   * \brief Construct an object metadata, without "blueprint" object
   *
   * \note This is used by events based objects.
   */
  ObjectMetadata(const gd::String& extensionNamespace_,
                 const gd::String& name_,
                 const gd::String& fullname_,
                 const gd::String& description_,
                 const gd::String& icon24x24_);

  /**
   * \brief Construct an object metadata, with a function that will be called
   * to instanciate a new object.
   */
  ObjectMetadata(const gd::String& extensionNamespace_,
                 const gd::String& name_,
                 const gd::String& fullname_,
                 const gd::String& description_,
                 const gd::String& icon24x24_,
                 CreateFunPtr createFunPtrP);
  ObjectMetadata() : createFunPtr(NULL) {}
  virtual ~ObjectMetadata(){};

  /**
   * \brief Declare a new condition as being part of the extension.
   * \deprecated Prefer using `AddScopedCondition`, to properly namespace the
   * condition.
   */
  gd::InstructionMetadata& AddCondition(const gd::String& name_,
                                        const gd::String& fullname_,
                                        const gd::String& description_,
                                        const gd::String& sentence_,
                                        const gd::String& group_,
                                        const gd::String& icon_,
                                        const gd::String& smallicon_);

  /**
   * \brief Declare a new action as being part of the extension.
   * \deprecated Prefer using `AddScopedAction`, to properly namespace the
   * action.
   */
  gd::InstructionMetadata& AddAction(const gd::String& name_,
                                     const gd::String& fullname_,
                                     const gd::String& description_,
                                     const gd::String& sentence_,
                                     const gd::String& group_,
                                     const gd::String& icon_,
                                     const gd::String& smallicon_);

  /**
   * Declare a new condition as being part of the object.
   */
  gd::InstructionMetadata& AddScopedCondition(const gd::String& name_,
                                              const gd::String& fullname_,
                                              const gd::String& description_,
                                              const gd::String& sentence_,
                                              const gd::String& group_,
                                              const gd::String& icon_,
                                              const gd::String& smallicon_);

  /**
   * Declare a new action as being part of the object.
   */
  gd::InstructionMetadata& AddScopedAction(const gd::String& name_,
                                           const gd::String& fullname_,
                                           const gd::String& description_,
                                           const gd::String& sentence_,
                                           const gd::String& group_,
                                           const gd::String& icon_,
                                           const gd::String& smallicon_);

  /**
   * \brief Declare a new expression as being part of the extension.
   */
  gd::ExpressionMetadata& AddExpression(const gd::String& name_,
                                        const gd::String& fullname_,
                                        const gd::String& description_,
                                        const gd::String& group_,
                                        const gd::String& smallicon_);
  /**
   * \brief Declare a new string expression as being part of the extension.
   */
  gd::ExpressionMetadata& AddStrExpression(const gd::String& name_,
                                           const gd::String& fullname_,
                                           const gd::String& description_,
                                           const gd::String& group_,
                                           const gd::String& smallicon_);

  /**
   * \brief Declare a new expression and condition as being part of the
   * object.
   * \note It's recommended to use this function to avoid declaring twice a
   * similar expression/condition.
   */
  gd::MultipleInstructionMetadata AddExpressionAndCondition(
      const gd::String& type,
      const gd::String& name,
      const gd::String& fullname,
      const gd::String& description,
      const gd::String& sentenceName,
      const gd::String& group,
      const gd::String& icon);

  /**
   * \brief Declare a new expression, condition and action as being part of the
   * object.
   * \note The action name is prefixed by "Set" (and the namespace, as the
   * condition).
   * \note It's recommended to use this function to avoid declaring
   * 3 times a similar expression/condition/action.
   */
  gd::MultipleInstructionMetadata AddExpressionAndConditionAndAction(
      const gd::String& type,
      const gd::String& name,
      const gd::String& fullname,
      const gd::String& description,
      const gd::String& sentenceName,
      const gd::String& group,
      const gd::String& icon);

  /**
   * \brief Create a new action which is the duplicate of the specified one.
   *
   * Useful for handling a deprecated action that is just a "copy" of the new
   * one.
   */
  gd::InstructionMetadata& AddDuplicatedAction(
      const gd::String& newActionName, const gd::String& copiedActionName);

  /**
   * \brief Create a new condition which is the duplicate of the specified one.
   *
   * Useful for handling a deprecated condition that is just a "copy" of the new
   * one.
   */
  gd::InstructionMetadata& AddDuplicatedCondition(
      const gd::String& newConditionName,
      const gd::String& copiedConditionName);

  /**
   * \brief Set the name shown to the user.
   */
  ObjectMetadata& SetFullName(const gd::String& fullname_);

  /**
   * \brief Set the description shown to the user.
   */
  ObjectMetadata& SetDescription(const gd::String& description_);

  /**
   * \brief Get the help path of the object, relative to the GDevelop
   * documentation root.
   */
  const gd::String& GetHelpPath() const { return helpPath; }

  /**
   * \brief Set the help path of the object, relative to the GDevelop
   * documentation root.
   *
   * The object instructions will have this help path set by
   * default, unless you call SetHelpPath on them.
   */
  ObjectMetadata& SetHelpPath(const gd::String& path) {
    helpPath = path;
    return *this;
  }

  /**
   * \brief Set the (user friendly) name of the group this object must
   * be categorised in.
   */
  ObjectMetadata& SetCategoryFullName(const gd::String& categoryFullName_) {
    categoryFullName = categoryFullName_;
    return *this;
  }

  /**
   * \brief The "capabilities" that are offered by the base object that are
   * *not* supported by this object, and should be hidden in the editor
   * inferface.
   */
  const std::set<gd::String>& GetUnsupportedBaseObjectCapabilities() const {
    return unsupportedBaseObjectCapabilities;
  }

  /**
   * \brief Add a "capability" that is offered by the base object that is *not*
   * supported by this object, and should be hidden in the editor inferface.
   */
  ObjectMetadata& AddUnsupportedBaseObjectCapability(
      const gd::String& capability) {
    unsupportedBaseObjectCapabilities.insert(capability);
    return *this;
  }

  /**
   * \brief Check if a "capability" that is offered by the base object is *not*
   * supported by this object, and should be hidden in the editor inferface.
   */
  bool IsUnsupportedBaseObjectCapability(const gd::String& capability) const {
    return unsupportedBaseObjectCapabilities.find(capability) != unsupportedBaseObjectCapabilities.end();
  }

  const gd::String& GetName() const { return name; }
  const gd::String& GetFullName() const { return fullname; }
  const gd::String& GetCategoryFullName() const { return categoryFullName; }
  const gd::String& GetHelpUrl() const { return helpUrl; }
  const gd::String& GetDescription() const { return description; }
  const gd::String& GetIconFilename() const { return iconFilename; }

  /**
   * \brief Set the URL pointing to the help page about this object
   * \note The path to the page must be relative to the wiki url.
   * \deprecated Use SetHelpPath instead
   */
  ObjectMetadata& SetHelpUrl(const gd::String& url);

  /**
   * \brief Erase any existing include file and add the specified include.
   * \note The requirement may vary depending on the platform: Most of the time,
   * the include file contains the declaration of the object.
   */
  ObjectMetadata& SetIncludeFile(const gd::String& includeFile);

  /**
   * \brief Add a file to the already existing include files.
   */
  ObjectMetadata& AddIncludeFile(const gd::String& includeFile);

  /**
   * \brief Return a reference to a map containing the names of the actions
   * (as keys) and the metadata associated with (as values).
   */
  std::map<gd::String, gd::InstructionMetadata>& GetAllActions() { return actionsInfos; };

  /**
   * \see gd::PlatformExtension::GetAllActions
   */
  std::map<gd::String, gd::InstructionMetadata>& GetAllConditions() { return conditionsInfos; };

  /**
   * \see gd::PlatformExtension::GetAllActions
   */
  std::map<gd::String, gd::ExpressionMetadata>& GetAllExpressions() { return expressionsInfos; };

  /**
   * \see gd::PlatformExtension::GetAllActions
   */
  std::map<gd::String, gd::ExpressionMetadata>& GetAllStrExpressions() { return strExpressionsInfos; };

  /**
   * \brief Set the object to be hidden in the IDE.
   *
   * Used mainly when an object is deprecated.
   */
  ObjectMetadata &SetHidden() {
    hidden = true;
    return *this;
  }


  /**
   * \brief Return true if the instruction must be hidden in the IDE.
   */
  bool IsHidden() const { return hidden; }

  std::map<gd::String, gd::InstructionMetadata> conditionsInfos;
  std::map<gd::String, gd::InstructionMetadata> actionsInfos;
  std::map<gd::String, gd::ExpressionMetadata> expressionsInfos;
  std::map<gd::String, gd::ExpressionMetadata> strExpressionsInfos;

  std::vector<gd::String> includeFiles;
  gd::String className;
  CreateFunPtr createFunPtr;

 private:
  gd::String extensionNamespace;
  gd::String name;
  gd::String helpPath;
  gd::String helpUrl;  ///< Deprecated. Use helpPath instead.
  gd::String fullname;
  gd::String description;
  gd::String iconFilename;
  gd::String categoryFullName;
  std::set<gd::String> unsupportedBaseObjectCapabilities;
  bool hidden = false;

  std::shared_ptr<gd::ObjectConfiguration>
      blueprintObject;  ///< The "blueprint" object to be copied when a new
                        ///< object is asked. Can be null in case a creation
                        ///< function is passed or for events based objects
                        ///< (CustomObject are using EventBasedObject, they
                        ///< don't need blueprints).
};

}  // namespace gd
#endif  // OBJECTMETADATA_H
