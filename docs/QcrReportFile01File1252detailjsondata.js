console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/IsNullConditional.java 33 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.IsNullConditional"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.IsNullConditional" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "forName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "forField(FieldSpec)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "IsNullConditional(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "nullableVersions(Versions)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "possibleVersions(Versions)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "ifNull(Runnable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "ifShouldNotBeNull(Runnable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "alwaysEmitBlockScope(boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "IsNullConditional"
 , "c2" : "conditionalGenerator(ConditionalGenerator)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "generate(CodeBuffer)"
 , "c3" : "10"
 , "c4" : "19"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "4"
}}
,
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
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class IsNullConditional contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class PrimitiveConditionalGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method generate arguments String  name|boolean  negated"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.message.IsNullConditional.PrimitiveConditionalGenerator.generate@POLYN153233 the MagicNumber/String  '%s != null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.message.IsNullConditional.PrimitiveConditionalGenerator.generate@POLYN153233 the MagicNumber/String  '%s == null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method forName arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method forField arguments FieldSpec  field"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method nullableVersions arguments Versions  nullableVersions"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method possibleVersions arguments Versions  possibleVersions"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method ifNull arguments Runnable  ifNull"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method ifShouldNotBeNull arguments Runnable  ifShouldNotBeNull"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method alwaysEmitBlockScope arguments boolean  alwaysEmitBlockScope"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method conditionalGenerator arguments ConditionalGenerator  conditionalGenerator"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method generate arguments CodeBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00083] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00093] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00098] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00105] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  '{%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  'if (%s) {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  '} else {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  'if (%s) {%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/IsNullConditional.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.message.IsNullConditional.generate@POLYN155629 the MagicNumber/String  '}%n' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
