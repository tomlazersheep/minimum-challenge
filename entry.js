import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import React, { useState } from "react";
import * as ReactDOM from 'react-dom';

window.RSIPlugin = {
  comment: "use these React references only for Spreadsheet Importer plugin to avoid version missmatches and overrides",
  ReactSpreadsheetImport,
  React,
  ReactDOM 
}