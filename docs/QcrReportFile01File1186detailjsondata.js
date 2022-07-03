console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java 20 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.tools.PredicateDoc"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.tools.PredicateDoc" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printPredicateHtml(PrintStream;DocInfo)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printHtml(PrintStream)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String...)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class PredicateDoc contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class DocInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument predicateClass is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method printPredicateHtml arguments PrintStream  out|DocInfo  docInfo"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument docInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;div id=\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '\'&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;h5&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;a href=\'#' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '\'&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;/a&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;/h5&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;p/&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN174350 the MagicNumber/String  '&amp;lt;/div&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method printHtml arguments PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method main arguments String  ...args"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/PredicateDoc.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00067] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
