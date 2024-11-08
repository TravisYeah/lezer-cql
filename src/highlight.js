import { styleTags, tags as t } from "@lezer/highlight";

export const cqlHighlight = styleTags({
  "not NOT and AND or OR is IS in IN like LIKE between BETWEEN":
    t.operatorKeyword,
  BooleanLiteral: t.bool,
  NULL: t.literal,
  Identifier: t.variableName,
  "Function/Identifier T_AFTER T_BEFORE T_CONTAINS T_DISJOINT T_DURING T_EQUALS T_FINISHEDBY T_FINISHES T_INTERSECTS T_MEETS T_METBY T_OVERLAPPEDBY T_OVERLAPS T_STARTEDBY T_STARTS S_INTERSECTS S_EQUALS S_DISJOINT S_TOUCHES S_WITHIN S_OVERLAPS S_CROSSES S_CONTAINS DATE TIMESTAMP INTERVAL CASEI ACCENTI POINT LINESTRING POLYGON MULTIPOINT MULTILINESTRING MULTIPOLYGON GEOMETRYCOLLECTION BBOX":
    t.function(t.variableName),
  NumericLiteral: t.number,
  "CharacterLiteral DateInstantString TimestampInstantString '..'": t.string,
  "ArithOp div DIV": t.arithmeticOperator,
  comparisonOperator: t.compareOperator,
  "( )": t.paren,
  ",": t.separator,
});
