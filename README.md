# Blazor DataGrid - Prevent Enter Key Functionality in Multiline TextBox

## Overview

This sample demonstrates how to prevent the default save action from being triggered when the Enter key is pressed while editing a multiline text box in the Syncfusion [Blazor DataGrid](https://www.syncfusion.com/blazor-components/blazor-datagrid). In multiline editing scenarios, users often expect the Enter key to insert a new line instead of completing the edit operation. The sample shows how the Grid editing experience can be customized to avoid unintended save operations and provide a more natural text-entry workflow.

## Key Features

- Demonstrates a Syncfusion Blazor DataGrid editing scenario involving multiline text input.
- Prevents the default save action that occurs when the Enter key is pressed while editing a multiline text box.
- Customizes keyboard behavior within the Grid editing workflow.
- Improves the editing experience for fields that require multiple lines of text.
- Uses a dedicated project focused on Enter-key handling within a DataGrid editor.

## Prerequisites

- Visual Studio 2022 or Visual Studio Code
- .NET SDK compatible with the project's target framework

## How to Run the Project

**Visual Studio 2022**

1. Clone or download this repository.
2. Open the solution file located in the `PreventEnterKey` project folder.
3. Restore all NuGet packages.
4. Set the appropriate startup project from the `PreventEnterKey` solution if required.
5. Build the solution.
6. Run the application using `Ctrl+F5`.

**Visual Studio Code**

1. Open the repository folder in Visual Studio Code.
2. Open the integrated terminal.
3. Navigate to the project directory inside the `PreventEnterKey` folder.

```bash
dotnet restore
dotnet run
```

4. Open the local application URL displayed in the terminal after the application starts.

## Project Structure

- `PreventEnterKey/Pages/` — contains the page that renders the Grid and editing scenario.

## Support and Feedback

- For general product questions, visit the [Syncfusion Community Forum](https://www.syncfusion.com/forums) or [Syncfusion Support](https://www.syncfusion.com/support).
- To report an issue specific to this sample, open a GitHub issue in this repository.
- For feature documentation, see the Syncfusion Blazor DataGrid editing documentation: https://help.syncfusion.com/grid-sdk/blazor/data-grid/editing

## License

This is a Syncfusion sample project provided to demonstrate product usage. Review the [Syncfusion license terms](https://www.syncfusion.com/sales/pricing?category=ui-components) before using Syncfusion components in your own applications.
