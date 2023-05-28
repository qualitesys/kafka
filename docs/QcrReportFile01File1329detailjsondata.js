console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ClientQuotaImage"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ClientQuotaImage" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#49"
 , "c1" : "ClientQuotaImage"
 , "c2" : "ClientQuotaImage(Map&lt;String,Double&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#53"
 , "c1" : "Map&lt;String,Double&gt;"
 , "c2" : "quotas()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#57"
 , "c1" : "void"
 , "c2" : "write(ClientQuotaEntity;Consumer&lt;List&lt;ApiMessageAndVersion&gt;&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#70"
 , "c1" : "List&lt;EntityData&gt;"
 , "c2" : "entityToData(ClientQuotaEntity)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#80"
 , "c1" : "ClientQuotaEntity"
 , "c2" : "dataToEntity(List&lt;EntityData&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#88"
 , "c1" : "List&lt;ValueData&gt;"
 , "c2" : "toDescribeValues()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#96"
 , "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#101"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#108"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#113"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method write arguments ClientQuotaEntity  entity|Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.image.ClientQuotaImage.write@POLYN168205 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method entityToData arguments ClientQuotaEntity  entity"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method dataToEntity arguments List&lt;EntityData &gt;  entityData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.image.ClientQuotaImage.equals@POLYN171014 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN171514 the MagicNumber/String  'ClientQuotaImage(quotas=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN171514 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN171514 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN171514 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00070] Public method entityToData is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00080] Public method dataToEntity is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.ClientQuotaImage.isEmpty@POLYN170894"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
