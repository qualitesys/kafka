console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java 15 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class ClientQuotaImage contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method write arguments ClientQuotaEntity  entity|Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.image.ClientQuotaImage.write@POLYN170763 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method entityToData arguments ClientQuotaEntity  entity"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method dataToEntity arguments List&lt;EntityData &gt;  entityData"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.image.ClientQuotaImage.equals@POLYN173564 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN174062 the MagicNumber/String  'ClientQuotaImage(quotas=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN174062 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN174062 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.image.ClientQuotaImage.toString@POLYN174062 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00051] Public method entityToData is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotaImage.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method dataToEntity is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
