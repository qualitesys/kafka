console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java 18 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.tools.TransformationDoc"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.tools.TransformationDoc" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printTransformationHtml(PrintStream;DocInfo)"
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
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00026] The class TransformationDoc contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class DocInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method printTransformationHtml arguments PrintStream  out|DocInfo  docInfo"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument docInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;div id=\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '\'&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;h5&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;a href=\'#' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '\'&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;/a&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;/h5&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;p/&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN180886 the MagicNumber/String  '&amp;lt;/div&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method printHtml arguments PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/TransformationDoc.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method main arguments String  ...args"
}} 
]
};
console.log('leListeStr 99 main end');
