console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.FeatureMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.FeatureMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FeatureMetadata"
 , "c2" : "FeatureMetadata(Map<String,FinalizedVersionRange>;Optional<Long>;Map<String,SupportedVersionRange>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,FinalizedVersionRange>"
 , "c2" : "finalizedFeatures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Long>"
 , "c2" : "finalizedFeaturesEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,SupportedVersionRange>"
 , "c2" : "supportedFeatures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class FeatureMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.clients.admin.FeatureMetadata.equals@POLYN171706 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.clients.admin.FeatureMetadata.equals@POLYN171706 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument featureVersionsMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.admin.FeatureMetadata the MagicNumber/String  '{%s}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.clients.admin.FeatureMetadata the MagicNumber/String  '(%s -&amp;gt; %s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.FeatureMetadata the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.admin.FeatureMetadata.toString@POLYN173145 the MagicNumber/String  'FeatureMetadata{finalizedFeatures:%s, finalizedFeaturesEpoch:%s, supportedFeatures:%s}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureMetadata.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.FeatureMetadata.toString@POLYN173145 the MagicNumber/String  '&amp;lt;none&amp;gt;' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
