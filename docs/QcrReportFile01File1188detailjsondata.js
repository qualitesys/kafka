console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java 18 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.tools.PredicateDoc"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.tools.PredicateDoc" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#60"
 , "c1" : "void"
 , "c2" : "printPredicateHtml(PrintStream;DocInfo)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#76"
 , "c1" : "void"
 , "c2" : "printHtml(PrintStream)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#82"
 , "c1" : "void"
 , "c2" : "main(String...)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument predicateClass is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method printPredicateHtml arguments PrintStream  out|DocInfo  docInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument docInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;div id=\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '\'&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;h5&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;a href=\'#' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '\'&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;/a&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;/h5&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;p/&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN162894 the MagicNumber/String  '&amp;lt;/div&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method printHtml arguments PrintStream  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method main arguments String  ...args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00082] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
