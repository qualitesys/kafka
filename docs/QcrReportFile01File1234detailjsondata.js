console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java 9 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.transforms.util.SchemaUtil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.util.SchemaUtil" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#11"
 , "c1" : "SchemaBuilder"
 , "c2" : "copySchemaBasics(Schema)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#21"
 , "c1" : "SchemaBuilder"
 , "c2" : "copySchemaBasics(Schema;SchemaBuilder)"
 , "c3" : "2"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class SchemaUtil contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method copySchemaBasics arguments Schema  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00011] For method copySchemaBasics list of called methods Object monObjet|org.apache.kafka.connect.data.SchemaBuilder SchemaBuilder_arrayN144676"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#11"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00011] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method copySchemaBasics arguments Schema  source|SchemaBuilder  builder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00021] For method copySchemaBasics list of called methods Object monObjet|java.util.Map&lt;String,String&gt; source_parametersN145430"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument builder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.connect.transforms.util.SchemaUtil.copySchemaBasics@POLYN144993 the MagicNumber/String  null should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/SchemaUtil.java.svg" }

};
console.log('leListeStr 99 main end');
